# load packages
library(tigris) 
library(leaflet) 
library(tidyverse)
library(ggplot2)
library(ggmap)
library(zipcode)
data(zipcode)
zipcode
library(viridis)


# cache zip boundaries that are download via tigris package
options(tigris_use_cache = TRUE)


#merge two data frames by ID
totaldogs <- merge(Dog_Zip,zipcode,by="zip")
totaldogs


totaldogs[1,2]
write.csv(Your DataFrame,"Path where you'd like to export the DataFrame\\File Name.csv", row.names = FALSE)

# create color palette 
pal <- colorNumeric(
  palette = "Greens",
  domain = totaldogs$count)

# create labels for zipcodes
labels <- 
  paste0(
    "Zip Code: ",
    totaldogs$zip, "<br/>",
    "count: ",
    scales::dollar(totaldogs$count)) %>%
  lapply(htmltools::HTML)

  labels


totaldogs %>% 
  leaflet %>% 
  # add base map
  addProviderTiles("CartoDB") %>% 
  # add zip codes
  addPolygons(fillColor = ~pal(mean_income),
              weight = 2,
              opacity = 1,
              color = "white",
              dashArray = "3",
              fillOpacity = 0.7,
              highlight = highlightOptions(weight = 2,
                                           color = "#666",
                                           dashArray = "",
                                           fillOpacity = 0.7,
                                           bringToFront = TRUE),
              label = labels) %>%
  
  ggplot(totaldogs, aes(map_id = region, fill = lifeExp))
  geom_map(map = totaldogs,  color = "white")
  expand_limits(y = totaldogs$longitude, x = totaldogs$latitude)
  scale_fill_viridis_c(option = "C")
  
  
  
  
  # add legend
  addLegend(pal = pal, 
            values = ~Count(), 
            opacity = 0.7, 
            title = htmltools::HTML("Dogs <br> 
                                    in NYC <br> 
                                    by Zip Code <br>
                                    2016"),
            position = "bottomright")
  
  write.csv(df,'C:\\Users\\The Doctor\\Desktop\\totaldogs.csv', row.names = FALSE)
  
  write.csv(totaldogs,'totaldogs2.csv')
  
  C:\Users\The Doctor\OneDrive\Desktop\nwtest2
