const cors         = require("cors");
const helmet       = require('helmet');
const bodyParser   = require('body-parser');
// const jwt          = require('./middlewares/jwtMiddleware');
// const roles        = require('./middlewares/roles');
// const versioning   = require('./middlewares/versioning')
// const maintenance  = require('./middlewares/maintenance')
const routes       = require('../routes/api');

// const {AuthorizationError} = require('../helpers/errors')

module.exports = async function(app){
	app.set('port', process.env.PORT || 4000);
	app.use(bodyParser.json({limit: '200mb'})); // support json encoded bodies
	app.use(bodyParser.urlencoded({ extended: true, })); // support encoded bodies
	app.use(helmet());
	app.use(cors());
	// app.use(versioning());
	// app.use(maintenance());
	// app.use(jwt());
	// app.use((req, res, next)=>{
	// 	if(req.isAuthenticated){
	// 		next();
	// 	} else {
	// 		if(req.path === '/api/v1/operations/status')
	// 			next()
	// 		else
	// 			next(new AuthorizationError("Auth", "Token is not valid"));
	// 	}
	// })
	// app.use(roles());
	routes.build(app);
}
