// main.go
package main

import (
	_ "cat-api/routers"

	"github.com/beego/beego/v2/server/web"
)

func main() {
	// Start the Beego application
	web.Run()
}
