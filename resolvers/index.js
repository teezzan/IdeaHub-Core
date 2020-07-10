

const resolvers = {
    Query: {
        user(parent, args, { dataSources }) {
            return dataSources.userApi.getAllUser();
        },
        userbyid(parent, { id }, { dataSources }) {
            return dataSources.userApi.getUserbyId(id);
        },
        userbyusername(parent, { username }, { dataSources }) {
            // console.log(user);
            return dataSources.userApi.getUserbyUsername(username);
        },
        ideas(parent, { pages, page }, { dataSources }) {
            return dataSources.ideaApi.getAllIdea(page, pages);
        },
        ideasbyid(parent, { id }, { dataSources }) {
            return dataSources.ideaApi.getIdeabyId(id);
        },
        ideasbytag(parent, { tag }, { dataSources }) {
            return dataSources.ideaApi.getIdeabytag(tag);
        }
    },
    Idea: {
        author(parent, args, { dataSources }) {
            return dataSources.userApi.getUserbyIdGen(parent.author);
        }
    },
    User: {
        ideas(parent, args, { dataSources }) {
            // console.log(parent);

            return dataSources.ideaApi.getIdeasbyUsernameGen(parent.username);
        }
    },
    Mutation: {
        register: async (_, { email, password, username }, { dataSources }) => {
            console.log("usernutation");
            return dataSources.userApi.createUser({ email, password, username });
        },
        login: async (_, { password, username }, { dataSources }) => {
            console.log("usernutation");
            return dataSources.userApi.loginUser({ password, username });
        },
        createIdea: async (_, { title, description, tags }, { dataSources }) => {
            console.log("Idea Creation");
            return dataSources.ideaApi.createIdea({ title, description, tags });
        }
    },
};

module.exports = resolvers;