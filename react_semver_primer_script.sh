#!/bin/bash

author="Author: RedFoxFinn"
description_s="Description: Project semantic versioning primer for React.js projects"
description_l="Details: Primer adds semantic versioning to new React project using yarn & npx. Script presumes that you have initialized the project BEFORE running it."
script="Script: react_semver_primer_script.sh"

printf "%s\n" "$script" "$description_s" "$author" "$description_l"
printf "%s\n" "Yarn: adding dev dependencies - standard-version, commitizen, @commitlint, husky"
yarn add --dev standard-version commitizen @commitlint/{cli,config-conventional} husky
printf "%s\n" "Creating commitlint.config.js -configuration file"
printf "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
printf "%s\n" "Adding husky config to package.json"
sed -i '/"scripts":/i \\t"husky": {\n\t\t"hooks": {\n\t\t\t"commit-msg": "commitlint -E HUSKY_GIT_PARAMS"\n\t\t}\n\t},' package.json
printf "%s\n" "npx: initialize commitizen"
npx commitizen init cz-conventional-changelog --save-dev --save-exact
printf "%s\n" "Adding semantic versioning scripts to package.json"
sed -i '/"scripts":/a \\t\t"cm": "git-cz",\n\t\t"release": "standard-version",' package.json
printf "%s\n" "Semantic versioning has been added to React project located in this directory!"