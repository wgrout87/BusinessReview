const resolvers = {
    Query: {
        allBusinesses: (obj, args, context, info) => {
            return context.db.businesses;
        },
        businessBySearchTerm: (obj, args, context, info) => {
            const compare = (a, b) => {
                const [orderField, order] = args.orderBy.split("_");
                const left = a[orderField],
                    right = b[orderField];

                if (left < right) {
                    return order === "asc" ? -1 : 1;
                } else if (left > right) {
                    // Should this really be the same returns as above?
                    return order === "desc" ? -1 : 1;
                } else {
                    return 0;
                }
            };
            return context.db.businesses.filter(v => {
                return v["name"].indexOf(args.search) !== -1;
            }).slice(args.offset, args.first).sort(compare);
        }
    },
    Business: {
        reviews: (obj, args, context, info) => {
            // TODO: find reviews for a particular business
        },
        avgStars: (obj, args, context, info) => {
            // TODO: calculate average stars aggregation
        },
    },
    Review: {
        user: (obj, args, context, info) => {
            // TODO: find the user who wrote this review
        },
        business: (obj, args, context, info) => {
            // TODO: find the business for this review
        },
    },
    User: {
        reviews: (obj, args, context, info) => {
            // TODO: find all reviews written by a user
        }
    }
}

module.exports = resolvers;