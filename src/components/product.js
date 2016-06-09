import React from 'react';

export default class Product extends React.Component {

    handleUpVote = () => {
        this.props.onVote(this.props.id, true);
    };

    handleDownVote = () => {
        this.props.onVote(this.props.id, false);
    };

    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.product_image_url}/>
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={this.handleUpVote}>
                            <i className='large caret up icon'></i>
                        </a>
                        <a onClick={this.handleDownVote}>
                            <i className="large caret down icon"></i>
                        </a>
                        {this.props.votes}
                    </div>
                    <div className='description'>
                        <a href={this.props.url}>
                            {this.props.title}
                        </a>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img
                            className='ui avatar image'
                            src={this.props.submitter_avatar_url}
                        />
                    </div>
                </div>
            </div>
        );
    }
};