pipeline {
    agent any
    parameters {
        string(defaultValue: "", description: 'Fecha de inicio ETL, formato {yyyy-mm-dd}', name: 'FECHA_INICIO')
        string(defaultValue: "", description: 'Fecha final de ETL, formato {yyyy-mm-dd}', name: 'FECHA_FINAL')
        string(defaultValue: "", description: 'Host dónde se encuentra druid ej: localhost', name: 'HOST_DRUID')
        string(defaultValue: "", description: 'Puerto dónde se ubica druid ej: "8000" ', name: 'PORT_DRUID')
        string(defaultValue: "", description: 'Secret accessKeyId', name: 'ACCESS_KEY_ID')
        string(defaultValue: "", description: 'Secret secretAccessKey', name: 'SECRET_ACCESS_KEY')
        string(defaultValue: "", description: 'Username', name: 'DRUID_USERNAME')
        string(defaultValue: "", description: 'Password', name: 'DRUID_PASSWORD')
        string(defaultValue: "", description: 'Nombre del bucket: s3-hello-world', name: 'BUCKET_NAME')
        string(defaultValue: "", description: 'Nombre del path base: /hola', name: 'BASE_PATH')
        string(defaultValue: "", description: 'Username', name: 'JK_USERNAME')
        string(defaultValue: "", description: 'Password', name: 'JK_PASSWORD')
    }
    triggers{ cron(env.ETL_CRON_EXPRESSION) }
    environment {
            // DB env variables
            HOST        = 'chattigohistorica.cs3xezul9bwh.us-east-1.rds.amazonaws.com'
            DATABASE    = 'chattigo'
            USERNAME    = 'usr_reporting'
            PASSWORD    = 'Chattigo2016.'

            // Logger
            APPNAME     = 'etl-history-report'
            LOGLEVEL    = '3'
            DRUID_CREDS = credentials('druid-creds')
       }
   stages {
        stage('Run') {
            steps {
                echo "Service user is $DRUID_CREDS_USR"
                echo "Service password is $DRUID_CREDS_PSW"
                echo """Service user  triple is $DRUID_CREDS_USR"""
                echo """Service user triple parentesis is ${DRUID_CREDS_USR}"""
                echo "Text variable is $TEXT_VARIABLE"
                echo """Text variable triple is $TEXT_VARIABLE"""
                echo """Text variable triple parentesis is ${TEXT_VARIABLE}"""
            }
        }
   }
}