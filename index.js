require('dotenv').config();

const express = require('express');
const engine = require('ejs-locals');
const { networkInterfaces, cpus, arch, platform, totalmem } = require('os');
const bodyParser = require('body-parser');
const mariadb = require('mariadb');

const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;
const pool = mariadb.createPool({
    host: DB_HOST, 
    user: DB_USER, 
    password: DB_PASS,
    database: DB_NAME,
    connectionLimit: 100
});

const PORT = Number(process.env.PORT) || 4000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/', express.static('./node_modules'));
app.use('/public', express.static('./public'));

app.get('/', (req, res) => {
    pool.getConnection().then(conn => {
        conn.query(`select * from usuario`).then(value => {
            delete value.meta;
            res.render('index', { data: value });
        }).catch(err => {
            throw err;
        });
    }).catch(err => {
        throw err;
    })
});

app.post('/add', (req, res) => {
    const { nombre, username, correo, contrasenia } = req.body;
    pool.getConnection().then(conn => {
        conn.query(`insert into usuario (nombre_usr, nombre_usuario_usr, correo_usr, contrasenia_usr) values (?, ?, ?, ?)`, [nombre, username, correo, contrasenia]).then(value => {
            res.redirect('/');
        }).catch(err => {
            throw err;
        });
    }).catch(err => {
        throw err;
    });
});

app.get('/delete', (req, res) => {
    const { id } = req.query;
    pool.getConnection().then(conn => {
        conn.query(`delete from usuario where codigo_usr = ?`, [id]).then(value => {
            res.redirect('/');
        });
    }).catch(err => {
        throw err;
    });
});

app.get('/truncate', (req, res) => {
    pool.getConnection().then(conn => {
        conn.query(`truncate table usuario`).then(value => {
            res.redirect('/');
        }).catch(err => {
            throw err;
        });
    }).catch(err => {
        throw err;
    });
});

app.get('/edit', (req, res) => {
    const { id } = req.query;
    pool.getConnection().then(conn => {
        conn.query(`select * from usuario where codigo_usr = ?`, [id]).then(value => {
            delete value.meta;
            res.render('edit', { data: value[0] });
        });
    }).catch(err => {
        throw err;
    });
});

app.post('/edit', (req, res) => {
    const { id } = req.query;
    const { nombre, username, correo, contrasenia } = req.body;
    pool.getConnection().then(conn => {
        conn.query(`update usuario set nombre_usr = ?, nombre_usuario_usr = ?, correo_usr = ?, contrasenia_usr = ? where codigo_usr = ?`, [nombre, username, correo, contrasenia, id]).then(value => {
            res.redirect('/');
        }).catch(err => {
            throw err;
        });
    }).catch(err => {
        throw err;
    });
});

console.log(`app runs in: \x1b[33m${platform()}, \x1b[33m${arch()}\x1b[0m.
cpu: \x1b[33m${cpus()[0].model}\x1b[0m.
memory: \x1b[33m${Math.round(totalmem()/Math.pow(2, 30))}gb\x1b[0m.`);

for (const key in networkInterfaces()) {
    if (networkInterfaces().hasOwnProperty(key)) {
        let hosts = networkInterfaces()[key][1].address;
        app.listen(PORT, hosts, () => {
            console.log(`  App ready at \x1b[36m http://${hosts}:${PORT}.\x1b[0m`);
        });
    }
}