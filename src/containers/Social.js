import React, {Component} from 'react';

function new_script(src) {
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        Object.assign(script, src);
        script.addEventListener('load', function () {
            resolve();
        });
        script.addEventListener('error', function (e) {
            reject(e);
        });
        document.body.appendChild(script);
    })
};
// Promise Interface can ensure load the script only once.
var twitterScript = new_script({src: 'https://platform.twitter.com/widgets.js'});
var linkedInScript = new_script({
    'data-id': 'https://www.linkedin.com/in/mahendra-singh-b97a3866',
    'data-format': "hover",
    'data-related': "false",
    'data-text': "Mahendra Singh"
});
var linkedInScript1 = new_script({
    src: "//platform.linkedin.com/in.js"
});

export default class Social extends Component {
    do_load = () => {
        var self = this;

    }

    constructor(props) {
        super(props);
        this.state = {
            status: 'start'
        };
    }

    render() {
        var self = this;
        if (self.state.status === 'start') {
            self.state.status = 'loading';
            setTimeout(function () {
                self.do_load()
            }, 0);
        }

        return (
            <div className="company-tile social">
                <div className="twitter-link">
                    <a href="https://twitter.com/mahendra3006?ref_src=twsrc%5Etfw" className="twitter-follow-button"
                       data-show-count="false"></a>
                </div>
                <div className="twitter-link">
                    <script src="//platform.linkedin.com/in.js" type="text/javascript"></script>
                    <script type="IN/MemberProfile" data-id="https://www.linkedin.com/in/mahendra-singh-b97a3866"
                            data-format="inline" data-related="false"></script>
                </div>
            </div>
        )
    }

}