import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import styles from './CategoryInfo.scss'; // eslint-disable-line

const TAG_CLASSES = [
  'primary',
  'success',
  'warning',
  'danger',
];

export default class CategoryInfo extends Component {
  getTagClass(index) {
    return TAG_CLASSES[index % TAG_CLASSES.length];
  }

  render() {
    const { tags, links } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.tags}>
          {
            tags.map((tag, index) => (
              <Link
                to={tag.url}
                key={index}
                className={
                  classNames(
                    'label',
                    `label-${this.getTagClass(index)}`,
                    [styles.tag]: true,
                  )
                }
              >
              {tag.value}
              </Link>
            ))
          }
        </div>
        <div className={styles.links}>
          {
            links.map((link, index) => (
              <div key={index} className={styles.link}>
                <Link to={link.url}>
                  <p>{link.value}</p>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

CategoryInfo.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};
