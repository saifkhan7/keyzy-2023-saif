
export async function getPropertyData(url: string) {
    let response = await fetch(url);
    let data = await response.text();
        
    //get content within <script> tags
    let script = data.match(/<script[^>]*>([\s\S]*?)<\/script>/gi);

    //get content within <script> tags that contain "window.PAGE_MODEL
    let pageModel = script?.filter((script) => script.includes('window.PAGE_MODEL'));

    //get primary price from pageModel
    let price = pageModel?.[0].match(/"price":(\d+)/)?.[1];

    if (! (price === undefined || price === null)) {
        //get incode from pageModel
        let incode = pageModel?.[0].match(/"incode":"(.*?)"/)?.[1];

        //get outcode from pageModel
        let outcode = pageModel?.[0].match(/"outcode":"(.*?)"/)?.[1];

        return {
            'status': 'success',
            'message': 'Data fetched successfully',
            'data': {
                'price': price,
                'postcode': `${outcode} ${incode}`
            }
        }
    }

    return {
        'status': 'error',
        'message': 'Unable to fetch data',
        'data': {}
    }
}