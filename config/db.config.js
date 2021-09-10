module.exports = {
    HOST: 'localhost',
    port: 3000,
    USER: 'root',
    PASSWORD: '',
    DB: 'course',
    dialect: 'mariadb',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
