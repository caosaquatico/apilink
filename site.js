//const puppeteer = require("puppeteer-core")
const puppeteer = require('puppeteer')

var l = {
    headless: true,
    defaultViewport: null,
    //executablePath: '/opt/google/chrome/google-chrome'
    //executablePath: '/usr/bin/google-chrome-stable'
    //executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
}

var resultado

var site = [{
        id: 'chaturbate',
        link: 'https://pt.chaturbate.com/',
    },
    {
        id: 'camSoda',
        link: 'https://www.camsoda.com/'
    },
    {
        id: 'cam4',
        link: 'https://pt.cam4.com/'
    },
    {
        id: 'flirt4free',
        link: 'https://www.flirt4free.com/?model='
    },
    {
        id: 'camster',
        link: 'https://www.camster.com/?model='
    }
]


const videosite = async(modelo, p) => {
    const m1 = modelo
    const browser = await puppeteer.launch(l)
    const page = await browser.newPage()
    const site0 = site[p]['link'] + m1
    console.log(site0)
    await page.goto(site0)

    //<a href="#" id="close_entrance_terms">ACEITO</a>

    if (p == 0) {
        const info = await page.evaluate(() => {
                return {
                    site: JSON.parse(initialRoomDossier).hls_source
                }

            })
            //console.log(info)
        resultado = info

    } else if (p == 1) {
        const info = await page.evaluate(() => {
                return {
                    site: videojs.players.video_singleton__video["cache_"].src
                }
            })
            //console.log(info)
        resultado = info


    } else if (p == 2) {
        const info = await page.evaluate(() => {
            return {
                site: lastHlsInstance.streamController.fragCurrent.baseurl
            }
        })


    } else if (p == 3) {
        const info = await page.evaluate(() => {
            return {
                site: VideoController.currentPlayer.networkUrl
            }
        })


    } else if (p == 4) {
        await page.waitFor('nav[class="btn-wrapper chat-nav model-menu-nav model-information"]', { delay: 300 })
        await page.mouse.wheel({ deltaY: 800 })
        await page.waitFor('div[class="chat-bio-wrap"]')
        const info = await page.evaluate(() => {
            return {
                site: VideoController.currentPlayer.hls.url,
                site2: VideoController.currentPlayer.networkUrl
            }
        })
        console.log(info)

    }

    browser.close()
    return resultado
}


/*
videosite('lisa-allure', '1')
    .then((res) => {
        console.log(res)
    })
*/

module.exports = { videosite }