import useGetConversations from "../../hooks/useGetConversations.js";
import { getRandomEmoji } from "/home/srestha/Desktop/chatt/frontend/src/utils/emojis.js";
import Conversation from "/home/srestha/Desktop/chatt/frontend/src/components/sidebar/Conversation.jsx";

const Conversations = () => {
    const { loading, conversations } = useGetConversations();
    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastIdx={idx === conversations.length - 1}
                />
            ))}

            {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
        </div>
    );
};
export default Conversations;
