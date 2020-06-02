/* Footer: insert credit, footnotes and data source.

Note: The logo can look awkward depending on the footnote text (especially if it wraps).
You may need to adjust the css to hide the spotlight logo for smaller screen widths or
simply remove it entirely.
*/

import React from "react";

const Footer = ({byline, outlet, outletUrl, source, footnote}) => {
  return (
    <div>
      <div className="footer__container">
        <div>
          {footnote && <div className="footer__notes is-size-7">
            <i>
              {footnote}
            </i>
          </div>}
          <div className="footer__byline-source is-size-7 has-text-grey">
            <span>Source: {source}</span>
            <span className="footer__source">
              <span className="footer__separator"></span>
              <span className="footer__byline">
                Chart: {byline},{" "}
                <a href={outletUrl}>{outlet}</a>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
