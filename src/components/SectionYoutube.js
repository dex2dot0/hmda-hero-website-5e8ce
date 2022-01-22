import React from 'react';
import _ from 'lodash';

import { withPrefix, markdownify } from '../utils';
import CtaButtons from './CtaButtons';
import useMediaQuery from "../hooks/useMediaQuery";

export default function SectionYoutube(props) {
    const isDesktop = useMediaQuery('(min-width: 960px)');
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
            <div className="gif-sm">
                <iframe id="ytplayer" type="text/html" width={isDesktop ? '1080px' : '720px'} height='720px'}
                src='https://www.youtube.com/embed/uzwJ3I7pwFY?autoplay=1&origin=http://hmda-hero.com'
                frameborder="0" allowfullscreen>
                </iframe>
            </div>
        </section>
    );
}
