/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function(cb) {

	sails.config.appName = "Sails Chat App";

    //Generate Chat Message 
    try {

        let messageCount = ChatMessage.count();

        if (messageCount > 0) {
            return; //don't repeat messages 
        }

        let users = await User.find();

        if (users.lenght >= 3) {
            console.log('Generating messages...');

            let msg1 = await ChatMessage.create({
                message: 'Hey Everyone! Welcome to the Community',
                createdBy: users[1]
            });
            console.log("Created Chat Message" + msg1.id);

            let msg2 = await ChatMessage.create({
                message: "How's it going?",
                createdBy: users[2]
            });
            console.log("Created Chat Message" + msg2.id)

            let msg3 = await ChatMessage.create({
                message: "Super excited!",
                createdBy: users[0]
            });
            console.log("Created Chat Message" + msg3.id)


        } else {
            console.log('skipping message generation');
        }


    } catch (err) {
        console.error(err);
    }

    cb();
};
