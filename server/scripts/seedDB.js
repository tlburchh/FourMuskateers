const mongoose = require("mongoose");
const db = require("../models");

// This file seeds our database

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wino", { useNewUrlParser: true });

const keywordsSeed = [
  {
    keyword: "tart"
  },
  {
    keyword: "dry"
  },
  {
    keyword: "sweet"
  },
  {
    keyword: "fruity"
  },
  {
    keyword: "balanced"
  },
  {
    keyword: "cloying"
  },
  {
    keyword: "bright"
  },
  {
    keyword: "crisp"
  },
  {
    keyword: "dense"
  },
  {
    keyword: "herby"
  },
  {
    keyword: "smooth"
  },
  {
    keyword: "jammy"
  },
  {
    keyword: "juicy"
  },
  {
    keyword: "oaky"
  },
];
const colorsSeed = [
  {
    color: "#0000FF"
  },
  {
    color: "#ffe5b4"
  },
  {
    color: "#5caf4c"
  },
  {
    color: "#CB4C78"
  },
  {
    color: "#6f4e37"
  },
  {
    color: "#bab86c"
  },
  {
    color: "#650a11"
  }
];
const winesSeed = [
  {
    name: "Traditional Mead - Off Dry",

    description: "Honey wine with just a hint of sweetness. Light floral notes with a slight citrus finish. Serve as you would a white wine, lightly chilled with Lemon Chicken, fish, or with spicy food! Silver Medal  - NC State Fair Wine Competition",
    priceRegular: '18.00',
    isAvailable: true
  },
  {
    name: "Off-dry Blackberry Mead",

    description: "Our Blackberry Off-dry Mead is our honey homage to red wine. With a full berry nose, and a taste that is tart blackberry balanced with the warm flavors of oak and vanilla. Serve at cellar temperature with beef or pork, or chill slightly, if you prefer.",
    priceRegular: '26.00',
    isAvailable: true
  },
  {
    name: "Traditional Mead - Semi-sweet",

    description: "A sweeter honey wine. Fabulous floral honey nose (from the wild flower honey) and long lingering honey finish! Just what you would expect from mead! Fabulous with cheesecake! Best in Class/Double Gold Medal - American Wine Society",
    priceRegular: '18.00',
    isAvailable: true
  },
  {
    name: "Traditional Mead - Gallberry Blossom",

    description: "Limited Release. The fragrance of this mead is floral with a little apricot, while it has a sweet slightly fruity flavor with hints of dried manog. Pairs well with pineapple teriyaki or a medium rare burger. Serve lightly chilled. Bronze Medal - Finger Lakes Wine",
    priceRegular: '15.00',
    isAvailable: true
  },
  {
    name: "Semi-sweet Blackberry Mead",

    description: "Our Blackberry Mead is sweet, tangy and bursting with flavor! Serve chilled with beef or pork. Try it with a lemon flavored dessert or as a reduction over ice cream! If you're looking for something lighter, try mixing with lemonade for a porch-sipper!",
    priceRegular: '24.00',
    isAvailable: true
  },
  {
    name: "Pineapple Mead",

    description: "Honeyed Pineapple has great honey character and finishes leaving a nice pineapple flavor in your mouth. Pairs well with teriyaki chicken or just as a cold libation on a summer afternoon. Works well as a base for a tropical sangria!",
    priceRegular: '19.00',
    isAvailable: true
  },
  {
    name: "Blueberry Mead",

    description: "The luscious summer flavor of blueberries preserved with honey for any time of the year. Fruity, sweet, and jammy this mead is lovely on its own or paired with a summer salad or barbeque. Or make sangria with strawberries and blueberries.",
    priceRegular: '23.00',
    isAvailable: true
  },
  {
    name: "Peach Mead",

    description: "Sweet Peach Mead reminds us of ripe, juicy summer peaces, bursting with flavor. Serve this sweet wine chilled at a picnic or use it to brighten up your favorite pork or spicy chicken dish! Or use it to make a great Summer sangria or Mead-mosa!",
    priceRegular: '18.00',
    isAvailable: true
  },
  {
    name: "Spiced Apple Mead",

    description: "Apple pie in a glass! Wonderful apple flavor enhanced with spices of cinnamon, clove and nutmeg. Tasty chilled, room temperature, or warmed gently in the Crockpot! Great with turkey dinner, carrot cake, or spice cake! Silver Medal - American Wine Society",
    priceRegular: '20.00',
    isAvailable: true
  },
  {
    name: "Pomegranate Pink Peppercorn",

    description: "Pomegranate Pink Peppercorn Mead has the lively zing of pomegranate and the fruity spice of pink peppercorns. Like all of the women fighting and surviving breast cancer, this mead is something special. We're donating $5 from each bottle to local cahrity.",
    priceRegular: '25.00',
    isAvailable: true
  },
  {
    name: "Cranberry Orange Fall Seasonal",

    description: "A tart and tangy holiday mead, yet lightly honey sweetened! A perfect complement to all of your holiday meals, from turkey dinner to baked ham.",
    priceRegular: '19.00',
    isAvailable: true
  },
  {
    name: "Honeyed Aromatic Roast",

    description: "Unique blend of honey and cold-pressed Costa Rican coffee is perfect for brunch or late night relaxing. Silver Medal - American Wine Society.",
    priceRegular: '18.00',
    isAvailable: true
  },
  {
    name: "Lavender",

    description: "Lavender is known for its floral nose and relaxing benefits. Heady floral with a slight rose flavor.",
    priceRegular: '18.00',
    isAvailable: true
  },
  {
    name: "Nordic Blend",

    description: "Reminiscent of a well known Scandinavian drink, Aquavit. Infused with caraway, fennel and anise seed. Flavors of fennel and rye bread. Bronze medal - Finger Lakes",
    priceRegular: '18.00',
    isAvailable: true
  },
  {
    name: "Sage Mead Fall Seasonal",

    description: "Sage is best known as a culinary herb, but also boasts restorative properties. Earthy, savory flavorys with a light woodsy quality. Lightly sweetened.",
    priceRegular: '18.00',
    isAvailable: true
  },
  {
    name: "Ginger",

    description: "Ginger's warming properties have been recognized for years, especially in Asia. Light floral nose with intense ginger flavor, a slight burn sweetened with honey.",
    priceRegular: '18.00',
    isAvailable: true
  },
  {
    name: "Ben's Special Ginger",

    description: "Our regular Ginger with MORE ginger! Tangy and spicy for ginger lovers. Great on its own but also phenomenal as a mixer for a bloody Mary or mule!",
    priceRegular: '18.00',
    isAvailable: true
  },
  {
    name: "Chai Tea",

    description: "Chai tea spices of cardamom, ginger, and cinnamon have enchanted the senses for centuries. Reminiscent of a cup of exotic spiced tea with honey.",
    priceRegular: '18.00',
    isAvailable: true
  },
  {
    name: "Kickin' Cranberry Orange Fall Seasonal",

    description: "Our mead with Peppers! This wine has the juicy flavors of Cranberry and Orange, kicked up a notch with local, hand smoked and dried jalapeno peppers. Serve slightly chilled with everything from chicken, to a BLT, to shrimp and grits.",
    priceRegular: '19.00',
    isAvailable: true
  },
  {
    name: "Reserve Chocolate Orange Mead",

    description: "Aged for a year on coca nibs, a very special chocolate and orange mead to share with your honey! 4.5 years old!",
    priceRegular: '45.00',
    isAvailable: false
  },
  {
    name: "Reserve White Chocolate Raspberry Mead",

    description: "Crafted from tart raspberries and wild flower honey, sweetened with meadowfoam honey, and aged on cocoa butter.",
    priceRegular: '45.00',
    isAvailable: false
  },
];
const ratingsSeed = [
  {
    numericalRating: 4
  },
  {
    numericalRating: 2
  },
  {
    numericalRating: 1
  },
  {
    numericalRating: 3
  }
];
let wineOrder = [];
// Make a list for the length of number of wines
winesSeed.forEach((wine, i) => {
  wineOrder.push({
    orderNumber: i
  });
});


// Seed initial data

db.Colors.deleteMany({}).then(
  db.Colors.insertMany(colorsSeed).then(resp => {
    db.Keywords.deleteMany({}).then(
      db.Keywords.insertMany(keywordsSeed).then(resp => {
        db.Wines.deleteMany({}).then(resp => {
          db.Wines.insertMany(winesSeed).then(resp => {
            db.Rating.deleteMany({}).then(
              db.Rating.insertMany(ratingsSeed).then(resp => {
                db.Order.deleteMany({}).then(
                  db.Order.insertMany(wineOrder).then(resp => {
                    console.log(`All collections populated`);
                    require('./seedAssociations')();
                  }).catch(err => {
                    console.log(`Error inserting wine order: ${err}`);
                  })
                ).catch(err => {
                  console.log(`Error deleting wine order: ${err}`);
                });
              }).catch(err => {
                console.log(`Error inserting ratings ${err}`);
              })
            ).catch(err => {
              console.log(`Error deleting ratings: ${err}`);
            });
          }).catch(err => {
            console.log(`Error inserting wines ${err}`);
          });
        }).catch(err => {
          console.log(`Error deleting wines: ${err}`);
        });
      }).catch(err => {
        console.log(`Error inserting keywords ${err}`);
      })
    ).catch(err => {
      console.log(`Error deleting keywords: ${err}`);
    });
  }).catch(err => {
    console.log(`Error inserting colors: ${err}`);
  })
).catch(err => {
  console.log("Error deleting colors: " + err);
});

