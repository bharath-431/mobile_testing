describe('bbdaily_test',async()=>{
    
   
    it('search and add item',async()=>{

        const bbdailyIcon = $('//android.widget.TextView[@content-desc="Predicted app: bbdaily"]');
        const explore_now = $('//android.widget.TextView[@resource-id="com.raincan.android.hybrid:id/explore_now"]')
        const location =$('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.raincan.android.hybrid:id/cities_recycler"]/android.widget.LinearLayout[2]')
        
        const searbar = $('//android.widget.EditText[@resource-id="com.raincan.android.hybrid:id/homePageSearchBox"]')
        const searchFieldInput = $('//android.widget.EditText[@resource-id="com.raincan.android.hybrid:id/searchView"]')
        const searchSuggestion = $('//android.widget.TextView[@resource-id="com.raincan.android.hybrid:id/txtTerm" and @text="carrots"]')
        const buyOnceBtn = $('(//android.widget.TextView[@resource-id="com.raincan.android.hybrid:id/btnAddToBasket"])[1]')
        const totalAmount =$('//android.widget.TextView[@resource-id="com.raincan.android.hybrid:id/total_tv"]')
        const subscribe=$('//android.widget.Button[@resource-id="com.raincan.android.hybrid:id/btnsubscribebbd" and @text="Subscribe @ ₹10.67"]')
        const viewCartBtn  = $('//android.widget.TextView[@resource-id="com.raincan.android.hybrid:id/cart_button"]')


        await bbdailyIcon.waitForExist()
        await bbdailyIcon.click()
        
        try {
            await explore_now.waitForExist({ timeout: 10000 })
            await explore_now.click();
            await location.waitForExist({ timeout: 8000 })
            await location.click();
        } catch (e)
        { 
            const pass = () => {}
        }    
        

        await searbar.waitForExist({ timeout: 10000 })
        await searbar.click();
    
        await searchFieldInput.waitForExist({ timeout: 10000 })
        await searchFieldInput.setValue('carrots')

        await searchSuggestion.waitForExist({ timeout: 10000 })
        await searchSuggestion.click()

        await buyOnceBtn.waitForExist({ timeout: 8000 })
        await buyOnceBtn.click()
        driver.pause(3000)

        await viewCartBtn.click()
       
        
        const totalPrice= await totalAmount.getText()
        console.log('Total amount of your order is: '+ totalPrice)

    })


})
