// <-- FRONT PAGE-->
import { TTop3 } from "./types"
import bagar from '@/public/_assets/places-images/bagar-001.jpg'
import patag from '@/public/_assets/places-images/patagonia-001.jpg'
import alps from '@/public/_assets/places-images/alps-001.jpg'


export const TOP3 : TTop3[] = [
    {
        id: 1,
        title: "Swiss Alps",
        stat_img: alps,
        tag: "Popular",
        desc: "Towering peaks draped in snow, traditional mountain villages, and ski runs that have been perfecting the art of the descent for over a century. Equal parts breathtaking and deeply human.",
        rating: "4.9 (2.4k reviews)",
        srtPrice: 299,
        dest_ref_url: "/destinations"
    },
    {
        id: 2,
        title: "Patagonia",
        stat_img: patag,
        tag: "Popular",
        desc: "Where the Andes dissolve into endless wind-swept plains and glaciers that have been carving the earth for millennia. Raw, humbling, and unlike anywhere else on the planet.",
        rating: "4.5 (1.4k reviews)",
        srtPrice: 129,
        dest_ref_url: "/destinations",
    },
    {
        id: 3,
        title: "Bagan",
        stat_img: bagar,
        tag: "Popular",
        desc: "A remote highland village where ancient stone trails wind through cedar forests and mist-covered valleys. The kind of place that makes you forget what day it is.",
        rating: "4.2 (900 reviews)",
        srtPrice: 79,
        dest_ref_url: "/destinations",

    },


]