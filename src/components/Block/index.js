import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import classNames from 'classnames'

import './Block.scss'

const Block = ({ children, className }) => (
    <div className={classNames("block", className)}>{children}</div>
)

export default Block