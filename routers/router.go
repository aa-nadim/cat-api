package routers

import (
	"cat-api/controllers"

	"github.com/beego/beego/v2/server/web"
)

func init() {
	// Route to the main controller
	web.Router("/", &controllers.MainController{})
}
