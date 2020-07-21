pipeline {
    agent any
    parameters {
        string(defaultValue: "", description: 'Fecha de inicio ETL, formato {yyyy-mm-dd}', name: 'FECHA_INICIO')
        string(defaultValue: "", description: 'Fecha final de ETL, formato {yyyy-mm-dd}', name: 'FECHA_FINAL')
        string(defaultValue: "${HOST_DRUID}", description: 'Host dónde se encuentra druid ej: localhost', name: 'HOST_DRUID')
        string(defaultValue: "${PORT_DRUID}", description: 'Puerto dónde se ubica druid ej: "8000" ', name: 'PORT_DRUID')
        string(defaultValue: "${ACCESS_KEY_ID}", description: 'Secret accessKeyId', name: 'ACCESS_KEY_ID')
        string(defaultValue: "${SECRET_ACCESS_KEY}", description: 'Secret secretAccessKey', name: 'SECRET_ACCESS_KEY')
        string(defaultValue: "${DRUID_USERNAME}", description: 'Username', name: 'DRUID_USERNAME')
        string(defaultValue: "${DRUID_PASSWORD}", description: 'Password', name: 'DRUID_PASSWORD')
        string(defaultValue: "${BUCKET_NAME}", description: 'Nombre del bucket: s3-hello-world', name: 'BUCKET_NAME')
        string(defaultValue: "${BASE_PATH}", description: 'Nombre del path base: /hola', name: 'BASE_PATH')
        string(defaultValue: "${JK_USERNAME}", description: 'Username', name: 'JK_USERNAME')
        string(defaultValue: "${JK_PASSWORD}", description: 'Password', name: 'JK_PASSWORD')
    }
    triggers{ cron('@daily') }
    environment {
            // DB env variables
            HOST        = 'chattigohistorica.cs3xezul9bwh.us-east-1.rds.amazonaws.com'
            DATABASE    = 'chattigo'
            USERNAME    = 'usr_reporting'
            PASSWORD    = 'Chattigo2016.'

            // Logger
            APPNAME     = 'etl-history-report'
            LOGLEVEL    = '3'
       }
   stages {
        stage('Run') {
            steps {
                sh """#!/bin/bash
                    python -m venv venv
                    source venv/bin/activate
                    pip install -r requirements.txt
                    printenv
                """
            }
        }
   }
}