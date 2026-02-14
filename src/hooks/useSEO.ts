import { useEffect } from 'react';

const SITE_NAME = 'StudyTheSkill';
const DEFAULT_TITLE = `${SITE_NAME} – Learn DBMS & DSA with Interactive Visuals`;
const DEFAULT_DESCRIPTION =
    'Master DBMS and Data Structures & Algorithms through hand-drawn visuals, interactive animations, and quizzes. Free, beginner-friendly CS learning platform.';

interface SEOProps {
    title?: string;
    description?: string;
    path?: string;
}

function setMeta(name: string, content: string, isProperty = false) {
    const attr = isProperty ? 'property' : 'name';
    let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
    }
    el.content = content;
}

export function useSEO({ title, description, path }: SEOProps = {}) {
    useEffect(() => {
        const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
        const desc = description || DEFAULT_DESCRIPTION;

        // Title
        document.title = fullTitle;

        // Meta description
        setMeta('description', desc);

        // Open Graph
        setMeta('og:title', fullTitle, true);
        setMeta('og:description', desc, true);
        if (path) {
            setMeta('og:url', `https://studytheskill.com${path}`, true);
        }

        // Twitter
        setMeta('twitter:title', fullTitle);
        setMeta('twitter:description', desc);

        // Canonical
        if (path) {
            let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
            if (!link) {
                link = document.createElement('link');
                link.rel = 'canonical';
                document.head.appendChild(link);
            }
            link.href = `https://studytheskill.com${path}`;
        }

        return () => {
            document.title = DEFAULT_TITLE;
            setMeta('description', DEFAULT_DESCRIPTION);
            setMeta('og:title', DEFAULT_TITLE, true);
            setMeta('og:description', DEFAULT_DESCRIPTION, true);
            setMeta('twitter:title', DEFAULT_TITLE);
            setMeta('twitter:description', DEFAULT_DESCRIPTION);
        };
    }, [title, description, path]);
}
