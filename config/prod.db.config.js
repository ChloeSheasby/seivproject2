module.exports = {
    HOST: 't2-database-1.cwre8cvv6tyn.us-west-1.rds.amazonaws.com',
    port: 3306,
    USER: 'admin',
    PASSWORD: 'seiv-t1-2021',
    DB: 'course',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
