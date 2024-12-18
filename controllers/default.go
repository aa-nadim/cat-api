package controllers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/beego/beego/v2/server/web"
)

type MainController struct {
	web.Controller
}

// CatImage structure to hold data for the image
type CatImage struct {
	URL string `json:"url"`
}

func (c *MainController) Get() {
	// Channel to communicate between goroutines
	ch := make(chan []CatImage)

	// Start a goroutine to fetch cat images
	go c.fetchCatImages(ch)

	// Wait for the cat images to be fetched
	cats := <-ch

	// Pass the fetched images to the template
	c.Data["Cats"] = cats
	c.TplName = "index.tpl"
}

func (c *MainController) fetchCatImages(ch chan<- []CatImage) {
	// TheCatAPI URL
	apiURL := "https://api.thecatapi.com/v1/images/search?limit=5"

	// Send GET request to TheCatAPI
	req, err := http.NewRequest("GET", apiURL, nil)
	if err != nil {
		fmt.Println("Error creating request:", err)
		return
	}

	// Set API key in the header
	req.Header.Add("x-api-key", "live_rtO7Nhjpuo0DmEaWTsE0J41ytL3FlYxLkJbSZNDG557WGS09hgLR2w0rjAWyNO5m")

	// Perform the GET request
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("Error making API call:", err)
		return
	}
	defer resp.Body.Close()

	// Read the response body
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Error reading response body:", err)
		return
	}

	// Parse the JSON response into a slice of CatImage objects
	var images []CatImage
	err = json.Unmarshal(body, &images)
	if err != nil {
		fmt.Println("Error unmarshaling response:", err)
		return
	}

	// Send the images back to the channel
	ch <- images
}
