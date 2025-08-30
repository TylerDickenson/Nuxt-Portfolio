Portfolio Website Built using Nuxt.js 

www.finsocial.com

To run Dev Server 
    nvm use 20
    npm run dev

To update Server

ssh into Server 
    ssh root @server:ip
    cd /var/www/Nuxt-Portfolio
    git pull
    npm i
    npm run build
    pm2 restart nuxt

    Check website is running correctly 
