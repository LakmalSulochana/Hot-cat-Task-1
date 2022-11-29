import family from "../assets/img/family.png"
import smartLife from "../assets/img/smartLife.png"
import last from "../assets/img/last.png"
import helth from "../assets/img/helthImg.png"
import family1 from "../assets/img/family1.png"
import ruwanImg from "../assets/img/ruwanImg.png"
import Present65 from "../assets/icn/65present.png"
import Present25 from "../assets/icn/25present.png"
import Present85 from "../assets/icn/85present.png"

export const data = [
    {
        firstname: "2022",
        topic: "Health & Wellbeing of Our Family",
        descrtiption:"A successful life is one that’s lived to the fullest, and if there are obstacles in the form of illnesses, be prepared to afford the best care you deserve.Find out how much you'll need to look after your and support Dilu, Ruwan and Ruwani even in critical conditions.",
        image:helth,
        totalNeed:"Rs. 19,200,000",
        HaveCost:"Rs. 3,000,000",
        IdentifiedNeed:"Rs. 16,200,000",
        sample: {
            description: "Secure your child's higher education needs with regular investments to achieve their dreams with additional benefits as per your need",
            cover: family,
            topic:"Smart Life Health Plan",
            miniTopic:"Selected protection Add-ons",
            approxRuppe:"Rs. 122,000",
            mantuarityRupee:"Rs.5,000,000",
            points:["Health 360","Waiver of premium","Suwamaga Benifit"],
            precentageRoundImg:Present65

        }
    }, 
     
    {
        firstname: "2022",
        topic: "Protect My Income",
        descrtiption:"Find out how much you'll need to support  Dilu, Ruwan and Ruwani if you are not around. To work out the finances your family would need to fund them if you weren’t around use our handy dependent protection and liability calculator.",
        image:family1,
        totalNeed:"Rs. 19,200,000",
        HaveCost:"Rs. 3,000,000",
        IdentifiedNeed:"Rs. 16,200,000",
        sample: {
            description: "Secure your child's higher education needs with regular investments to achieve their dreams with additional benefits as per your need",
            cover: smartLife,
            topic:"Smart Life - Protect my income plan",
            miniTopic:"Recommended mandatory riders ",
            approxRuppe:"Rs. 90,000",
            mantuarityRupee:"Rs.5,000,000",
            points:["Long term benifit","Waiver of premium","Accidental death benifit"],
            precentageRoundImg:Present25

        }
    },
    {
        firstname: "2034",
        topic: "Ruwan’s Education",
        descrtiption:"Give yourself an early start to comfortably fund the aspirations and ambitions of your children with a plan that secures their higher education and future. Begin by using our child education fund calculator to find how much you’re likely to need in order to give Ruwan  the best education that he deserve!",
        image:ruwanImg,
        totalNeed:"Rs. 19,200,000",
        HaveCost:"Rs. 3,000,000",
        IdentifiedNeed:"Rs. 16,200,000",
        sample: {
            description: "Uninterrupted education even in case of a demise as we will take care of premium payments with monthly education assistance fee benefit and higher education needs. ",
            cover: last,
            topic:"Life Plus Ecucational Plan",
            miniTopic:"Selected protection Add-ons",
            approxRuppe:"Rs. 150,000",
            mantuarityRupee:"Rs.5,000,000",
            points:["Long term benifit","Waiver of premium","Accidental death benifit"],
            precentageRoundImg:Present85

        }
        
    },
]