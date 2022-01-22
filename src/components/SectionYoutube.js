import React from 'react';
import _ from 'lodash';

import { withPrefix, markdownify } from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionYoutube extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const content = _.get(section, 'content');
        const actions = _.get(section, 'actions');
        const backgroundImage = _.get(section, 'image');

        return (
            <section id={sectionId} className="block block-hero has-gradient outer">
                {backgroundImage && (
                    <div
                        className="bg-img"
                        style={{
                            backgroundImage: `url('${withPrefix(backgroundImage)}')`
                        }}
                    />
                )}
                <div className="gif-sm">
                    <iframe id="ytplayer" type="text/html" width="640" height="360"
                    src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                    frameborder="0"></iframe>
                    {content && <div className="block-gif">{markdownify(content)}</div>}
                    {!_.isEmpty(actions) && (
                        <div className="block-buttons">
                            <CtaButtons actions={actions} />
                        </div>
                    )}
                </div>
            </section>
        );
    }
}
