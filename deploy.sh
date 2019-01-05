#!/bin/bash
ver=version2
ng build --prod --base-href=https://tools.adfc-hamburg.de/t30-paten/${ver}/ --deploy-url=https://tools.adfc-hamburg.de/t30-paten/${ver}/ && rsync -r --delete -v dist/t30-paten/ root@tools:/var/www/html/t30-paten/${ver}
