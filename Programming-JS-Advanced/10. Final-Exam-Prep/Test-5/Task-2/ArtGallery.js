class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error("This article model is not included in this gallery!");
        }

        let foundArticle = this.listOfArticles.find(a => a.articleName === articleName && a.articleModel === articleModel);

        if (foundArticle === undefined) {
            let article = {
                articleModel,
                articleName,
                quantity
            };
            this.listOfArticles.push(article);
        } else {
            foundArticle.quantity += Number(quantity);
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        let guestIndex = this.guests.findIndex(g => g.guestName === guestName);
        if (guestIndex !== -1) {
            throw new Error(`${guestName} has already been invited.`)
        } else {
            let points = 50;
            if (personality === "Vip") {
                points = 500;
            } else if (personality === "Middle") {
                points = 250;
            }
            let guest = {
                guestName,
                points,
                purchaseArticle: 0,
            }
            this.guests.push(guest);
        }
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {

        let foundArticle = this.listOfArticles.find(a => a.articleName === articleName && a.articleModel === articleModel);
        if (foundArticle === undefined) {
            throw new Error("This article is not found.");
        }

        if (foundArticle.quantity === 0) {
            return `The ${articleName} is not available.`
        }

        let guest = this.guests.find(g => g.guestName === guestName);
        if (guest === undefined) {
            return "This guest is not invited.";
        }

        if (guest.points < this.possibleArticles[articleModel]) {
            return "You need to more points to purchase the article.";
        } else {
            guest.points -= this.possibleArticles[articleModel];
            guest.purchaseArticle++;
            foundArticle.quantity--;
        }

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

    showGalleryInfo(criteria) {
        let message = [];
        if (criteria === 'article') {
            message.push("Articles information:");
            for (let article of this.listOfArticles) {
                message.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`);
            }
            return message.join('\n');
        } else if (criteria === 'guest') {
            message.push('Guests information:');
            for (let guest of this.guests) {
                message.push(`${guest.guestName} - ${guest.purchaseArticle}`);
            }
            return message.join('\n');
        }
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

