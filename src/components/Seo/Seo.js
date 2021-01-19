import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

export default function Seo({ title, meta, description, lang }) {
    const data = useStaticQuery(
        graphql`
        query{
            site{
                siteMetadata{
                    title,
                    description,
                    author
                }
            }
        }`
    );
    const metaDescription = description || data.site.siteMetadata.description;
    return (
        <Helmet
            title={title}
            htmlAttributes={{
                lang,
            }}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
                {
                    name: "description",
                    content: metaDescription
                },
                {
                    name: "og:title",
                    content: title
                },
                {
                    name: "og:description",
                    content: description
                },
                {
                    name: "og:type",
                    content: "website"
                }
            ].concat(meta)}
        />
    )
}

Seo.defaultProps = {
    lang: "es",
    meta: [],
    description: "",
}

Seo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
}