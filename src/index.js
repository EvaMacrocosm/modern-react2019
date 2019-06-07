import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetails';
import ApprovalCard from './ApprovalCard';
import faker from "faker";

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail
                    author='Jim'
                    timeAgo='13:23'
                    content='Time for what?'
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='Mary'
                    timeAgo='13:24'
                    content='Revolution'
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='Lulu'
                    timeAgo='13:25'
                    content='Oppps'
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));