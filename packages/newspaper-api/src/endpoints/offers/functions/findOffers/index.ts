import { APIGatewayProxyResult } from 'aws-lambda';
import axios from "axios";


export const handler = async (): Promise<APIGatewayProxyResult> => {
    const offersResults = await axios(`http://localhost:5000/dev/offers`)
    const newspaperResults = await axios(`http://localhost:5000/dev/newspapers`)
    const providerOffers: string[] = offersResults.data
    const providerNewspapers: any[] = newspaperResults.data

    const offers = {
        newspapers: [],
        type: [],
        duration: []
    } as any

    const s: any = {};

    for(let i = 0; i < providerOffers.length; i++) {
        const newspaper = providerNewspapers.find((newspapers) => newspapers.id === providerOffers[i].substring(0,2)).name
        if (offers.newspapers.indexOf(newspaper) <= 0) {
            offers.newspapers.push(newspaper)
        }
        offers.type.push(providerOffers[i].substring(3,5));
        let flag = false;
        for(let j = 0; j < offers.duration.length; j++) {
            if (offers.duration[j] == providerOffers[i].substring(7)) {
                flag = true
                break;
            }
        }
        if (!flag) {
            offers.duration.push(providerOffers[i].substring(7));
        }
    }

    return {
        body: JSON.stringify(({
            ...offers,
            type: offers.type.filter((e: string, i: number, l: string) => l.indexOf(e) === i),
        })),
        statusCode: 200,
    };
}
