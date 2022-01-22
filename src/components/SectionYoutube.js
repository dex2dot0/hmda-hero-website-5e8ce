import React from 'react';
import _ from 'lodash';

import { withPrefix, markdownify } from '../utils';
import CtaButtons from './CtaButtons';
import useMediaQuery from "../hooks/useMediaQuery";

export default function SectionYoutube(props) {
    const isDesktop = useMediaQuery('(min-width: 960px)');
    console.log(`is desktop ${isDesktop}`);
    const section = _.get(props, 'section');
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
            <iframe id="ytplayer" type="text/html" width='100%' height='720px'
            src='https://www.youtube.com/embed/uzwJ3I7pwFY?autoplay=1'
            frameborder="0" allowfullscreen al>
            </iframe>
        </section>
    );
}
