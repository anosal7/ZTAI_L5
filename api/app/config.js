const config = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.MONGODB_URI || 'mongodb://anosal:Adik12369@ds247838.mlab.com:47838/bazatai',
    JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;