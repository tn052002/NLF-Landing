import {defineConfig} from '@playwright/test'
export default defineConfig({testDir:'./tests/browser',use:{baseURL:'http://localhost:3000'},webServer:{command:'npm run dev -- --host 127.0.0.1',url:'http://localhost:3000/vi',reuseExistingServer:true},projects:[{name:'desktop',use:{viewport:{width:1440,height:1000}}},{name:'mobile',use:{viewport:{width:390,height:844}}}]})
