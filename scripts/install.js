#!/usr/bin/env node

const {readFileSync, writeFileSync, unlinkSync} = require('fs')


// Enable `react-native-web` in webpack by directly modifying files in `react-scripts`
function replace(name)
{
  const {dest, packageName, src} = this

  const path = `node_modules/${packageName}/${name}.js`
  const data = readFileSync(path, 'utf8')

  writeFileSync(path, data.replace(src, dest))
}

// Fix versions in `react-native-sensitive-info` directly

const path_csproj = `node_modules/react-native-sensitive-info/windows/RNSensitiveInfo/RNSensitiveInfo/RNSensitiveInfo.csproj`
const data_csproj = readFileSync(path_csproj, 'utf8')

writeFileSync(path_csproj, data_csproj.replace('10.0.10586.0', '10.0.14393.0'))

const path_project = `node_modules/react-native-sensitive-info/windows/RNSensitiveInfo/RNSensitiveInfo/project.json`
const path_projectlock = `node_modules/react-native-sensitive-info/windows/RNSensitiveInfo/RNSensitiveInfo/project.lock.json`
const data_project = readFileSync(path_project, 'utf8')

writeFileSync(path_project, data_project.replace('"Microsoft.NETCore.UniversalWindowsPlatform": "5.2.2",', '"Microsoft.NETCore.UniversalWindowsPlatform": "6.0.6",').replace("uap10.0","uap10.0.14393"))
unlinkSync(path_projectlock)

// Replace usage of `react-native-web` for `react-native-web_improved`
replace.call({
  dest: 'react-native-web_improved',
  packageName: 'babel-plugin-react-native-web',
  src: 'react-native-web'
}, 'index')
