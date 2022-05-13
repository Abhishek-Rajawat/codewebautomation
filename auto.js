const puppeteer=require("puppeteer")
const url='https://www.hackerrank.com/auth/login'
const email='demorag153@duetube.com'
const pass='okokok06'
const answerObj=require('./codes');


(async function(){
    try{
        let browserOpen=await puppeteer.launch({
            headless:false,
            defaultViewport:null,
            args : ["--start-maximized"],
        })
    
        let page=await browserOpen.newPage()
        await page.goto(url)
        await page.type('input[name="username"]',email,{delay:50})
        await page.type('input[name="password"]',pass,{delay:50})
        await page.click('button[data-analytics="LoginPassword"]',{delay:50})
        await waitnClick('a[data-attr1="algorithms"]',page)
        await waitnClick('.challenge-submit-btn button',page)
        await waitnClick('.css-1fv400i-control',page)
        await waitnClick('div[id="react-select-2-option-8"]',page)
        await waitnClick('.checkbox-input',page)
        await page.type('.input-wrap>.ui-tooltip-wrapper',answerObj.answers[0])
        await page.keyboard.down('Control')
        await page.keyboard.press('A')
        await page.keyboard.press('X')
        await page.click('.monaco-scrollable-element.editor-scrollable.vs')
        await page.keyboard.press('A')
        await page.keyboard.press('V')
        await page.click('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled')

    }
    catch(err){
        console.log(err)
    }
    
})()



async function waitnClick(selector, cPage){
    await cPage.waitForSelector(selector)
    let clickedSelector=cPage.click(selector)
    return clickedSelector
}
