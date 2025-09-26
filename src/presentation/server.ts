import express, { Router } from 'express';
import path from 'path';
import { AppRoutes } from './routes';
import compression from 'compression';

interface Options {
    port: number;
    publicPath?: string;
    routes: Router;
}

export class Server {

    private app = express();
    private readonly port: number;
    private readonly publicPath: string;
    private readonly routes: Router;

    constructor(options: Options) {
        const { port, publicPath , routes} = options;
        this.port = port;
        this.publicPath = publicPath ?? 'public';
        this.routes = routes;
    }



    async start() {

        // * Middlewares

        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true})); // x-www-url-encoded
        this.app.use(compression()); // Comprime las respuestas para que tengan menor tamaño (Buenas prácticas de express)

        // * Routes
        this.app.use(this.routes);

        // * Public folder
        this.app.use(express.static(this.publicPath));

        
        // * Cualquier ruta no definida termina aquí (SPA)
        this.app.get('*', (req, res) => {
            const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`);
            res.sendFile(indexPath);
        })

        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}