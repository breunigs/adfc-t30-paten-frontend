#!/bin/bash
ver=version3
ng build --base-href=https://tools.adfc-hamburg.de/t30-paten/${ver}/ --aot --deploy-url=https://tools.adfc-hamburg.de/t30-paten/${ver}/ &&
    sed -i -e 's/\(data-base-url="\)."/\1\/t30-paten\/'${ver}'"/' dist/t30-paten/index.html &&
    rsync -r --delete -v dist/t30-paten/ root@tools:/var/www/html/t30-paten/${ver}
