# Helium Region Tool

The [Nebra Helium region tool](https://region.nebra.com) is a simple interactive tool to find the frequency plan details of your specified LoRa / Helium region.

This repo contains the source code (feel free to fork and use yourself) which is then deployed automatically using [Cloudflare Pages](https://pages.cloudflare.com/).

## Where does the data come from?

The data used by this repo comes from the [regions CSV file](https://github.com/dewi-alliance/hplans/blob/main/regions.csv) in the Helium Foundation (formerly DeWi Alliance) [hplans GitHub repo](https://github.com/dewi-alliance/hplans). 

In turn, the hplans CSV file linked above is based on the [RP2-1.0.3 LoRaWAN Regional Parameters](https://lora-alliance.org/resource_hub/rp2-1-0-3-lorawan-regional-parameters/) from the LoRaWAN Alliance as well as [Helium Network's country definitions](https://github.com/helium/miner/blob/master/priv/countries_reg_domains.csv). 
