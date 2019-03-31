const jwt = require('jsonwebtoken');

//=====================================
//Verificar Token
//=====================================
let verificaToken = (req, res, next) => {
    let token = req.get('token'); // Sería token o autoritation

    //No nos continúa con la ejecución, por lo que hay que llamar la función Next para que siga.
    // res.json({
    //     token
    // });

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: 'Toquen no valido'
            });
        }
        req.usuario = decoded.usuario;
        next();
    });


};

//=====================================
//Verifica Admin Rol
//=====================================
let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;
    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }


};


module.exports = {
    verificaToken,
    verificaAdmin_Role
}