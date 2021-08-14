module.exports = {
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_DIALECT: process.env.DATABASE_DIALECT,
    DATABASE_HOST: process.env.DATABASE_HOST,
    PORT: process.env.PORT,
    DB_BACKUP_EMAIL: process.env.DB_BACKUP_EMAIL,

    LOCAL_DATABASE_NAME: process.env.LOCAL_DATABASE_NAME,
    LOCAL_DATABASE_PASSWORD: process.env.LOCAL_DATABASE_PASSWORD,
    LOCAL_DATABASE_HOST: process.env.LOCAL_DATABASE_HOST,
    LOCAL_PORT: process.env.LOCAL_PORT,

    MAIL_SERVICE: process.env.MAIL_SERVICE,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    CLIENT_URL: process.env.CLIENT_URL,
    AUTH_URL: process.env.AUTH_URL,
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_PORT: process.env.EMAIL_PORT,
    TEMPLATE_FOLDER: process.env.TEMPLATE_FOLDER,
    MAIL_USE_TLS: process.env.MAIL_USE_TLS,
    MAIL_USE_SSL: process.env.MAIL_USE_SSL,
    SECURE: process.env.SECURE,

    HR_EMAIL: process.env.HR_EMAIL,

    SUPER_ADMIN_EMAIL: process.env.SUPER_ADMIN_EMAIL,

    // reCaptcha credential
    SITE_KEY: process.env.SITE_KEY,
    SECRET_KEY: process.env.SECRET_KEY,
    WASSENGER_TOKEN: process.env.WASSENGER_TOKEN

}