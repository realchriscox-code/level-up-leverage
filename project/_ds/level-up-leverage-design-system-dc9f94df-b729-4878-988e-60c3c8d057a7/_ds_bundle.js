/* @ds-bundle: {"format":4,"namespace":"LevelUpLeverageDesignSystem_dc9f94","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"f1f0dd03d640","components/data/Avatar.jsx":"e00a27e204bd","components/data/Card.jsx":"e602400208b0","components/feedback/Alert.jsx":"f629df7af903","components/feedback/Badge.jsx":"1a9c20f7ac21","components/forms/Checkbox.jsx":"8fd4ee154edc","components/forms/Input.jsx":"b69735a04a97","components/forms/Radio.jsx":"10975887b35b","components/forms/Select.jsx":"84ac9e50a7c5","components/forms/Switch.jsx":"db2afeaafe31","components/navigation/Tabs.jsx":"c31ac71d59a2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LevelUpLeverageDesignSystem_dc9f94 = window.LevelUpLeverageDesignSystem_dc9f94 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  leadingIcon,
  trailingIcon,
  children,
  onClick,
  type = 'button',
  fullWidth = false,
  ...props
}) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const sizeMap = {
    sm: {
      padding: '6px 12px',
      fontSize: '0.8125rem',
      gap: '5px',
      iconSize: 14
    },
    md: {
      padding: '10px 16px',
      fontSize: '0.875rem',
      gap: '6px',
      iconSize: 16
    },
    lg: {
      padding: '12px 24px',
      fontSize: '1rem',
      gap: '8px',
      iconSize: 18
    }
  };
  const variantMap = {
    primary: {
      background: hovered && !disabled ? 'var(--color-navy-800)' : 'var(--color-navy-900)',
      color: '#ffffff',
      border: '1px solid transparent',
      boxShadow: hovered && !disabled ? 'var(--shadow-md)' : 'var(--shadow-xs)'
    },
    accent: {
      background: hovered && !disabled ? 'var(--color-gold-500)' : 'var(--color-gold-400)',
      color: '#ffffff',
      border: '1px solid transparent',
      boxShadow: hovered && !disabled ? 'var(--shadow-gold)' : 'none'
    },
    mint: {
      background: hovered && !disabled ? 'var(--color-mint-400)' : 'var(--color-mint-300)',
      color: 'var(--color-navy-700)',
      border: '1px solid transparent',
      boxShadow: hovered && !disabled ? 'var(--shadow-mint)' : 'none'
    },
    secondary: {
      background: hovered && !disabled ? 'var(--color-slate-50)' : 'var(--surface-base)',
      color: 'var(--color-navy-800)',
      border: '1px solid var(--color-slate-300)',
      boxShadow: 'var(--shadow-xs)'
    },
    ghost: {
      background: hovered && !disabled ? 'var(--color-slate-100)' : 'transparent',
      color: 'var(--color-slate-700)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    destructive: {
      background: hovered && !disabled ? '#dc2626' : 'var(--color-error)',
      color: '#ffffff',
      border: '1px solid transparent',
      boxShadow: 'none'
    }
  };
  const s = sizeMap[size] || sizeMap.md;
  const v = variantMap[variant] || variantMap.primary;
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    fontFamily: 'var(--font-body)',
    fontWeight: '600',
    fontSize: s.fontSize,
    lineHeight: '1.25rem',
    letterSpacing: '0em',
    padding: s.padding,
    borderRadius: 'var(--radius-btn)',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? '100%' : undefined,
    whiteSpace: 'nowrap',
    userSelect: 'none',
    outline: 'none',
    transform: pressed && !disabled ? 'scale(0.97)' : 'scale(1)',
    transition: 'background-color 180ms cubic-bezier(0,0,0.2,1), box-shadow 180ms cubic-bezier(0,0,0.2,1), transform 100ms cubic-bezier(0,0,0.2,1)',
    ...v
  };
  const Spinner = () => /*#__PURE__*/React.createElement("svg", {
    width: s.iconSize,
    height: s.iconSize,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      animation: 'lul-spin 0.75s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56"
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `@keyframes lul-spin { to { transform: rotate(360deg); } }`), /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: style,
    disabled: disabled,
    onClick: !loading ? onClick : undefined,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false)
  }, props), loading ? /*#__PURE__*/React.createElement(Spinner, null) : leadingIcon, children, !loading && trailingIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
function Avatar({
  src,
  name,
  size = 'md',
  status,
  square = false
}) {
  const sizeMap = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 56,
    xl: 72
  };
  const fontSizeMap = {
    xs: '0.625rem',
    sm: '0.75rem',
    md: '0.9375rem',
    lg: '1.25rem',
    xl: '1.5rem'
  };
  const statusSizeMap = {
    xs: 6,
    sm: 8,
    md: 10,
    lg: 13,
    xl: 16
  };
  const px = sizeMap[size] || 40;
  const fontSize = fontSizeMap[size] || '0.9375rem';
  const statusPx = statusSizeMap[size] || 10;
  const initials = name ? name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() : '?';
  const statusColors = {
    online: 'var(--color-success)',
    away: 'var(--color-warning)',
    busy: 'var(--color-error)',
    offline: 'var(--color-slate-300)'
  };
  const borderRadius = square ? 'var(--radius-lg)' : '50%';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexShrink: 0
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || 'Avatar',
    style: {
      width: px,
      height: px,
      borderRadius,
      objectFit: 'cover',
      border: '1.5px solid var(--border-default)',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: px,
      height: px,
      borderRadius,
      background: 'var(--color-navy-800)',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize,
      fontFamily: 'var(--font-display)',
      fontWeight: '700',
      letterSpacing: '0.02em',
      border: '1.5px solid var(--color-navy-700)',
      flexShrink: 0,
      userSelect: 'none'
    }
  }, initials), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: statusPx,
      height: statusPx,
      borderRadius: '50%',
      background: statusColors[status] || statusColors.offline,
      border: '2px solid var(--surface-base)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = 'default',
  header,
  footer,
  padding = 'md',
  hoverable = false,
  children,
  onClick,
  style: extraStyle,
  ...props
}) {
  const [hovered, setHovered] = React.useState(false);
  const variantMap = {
    default: {
      background: 'var(--surface-base)',
      border: '1px solid var(--border-default)',
      boxShadow: hovered && hoverable ? 'var(--shadow-md)' : 'var(--shadow-sm)'
    },
    subtle: {
      background: 'var(--surface-subtle)',
      border: '1px solid var(--border-subtle)',
      boxShadow: hovered && hoverable ? 'var(--shadow-sm)' : 'var(--shadow-none)'
    },
    dark: {
      background: 'var(--surface-dark)',
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: hovered && hoverable ? 'var(--shadow-xl)' : 'var(--shadow-lg)'
    }
  };
  const paddingMap = {
    none: '0',
    sm: '16px',
    md: '20px',
    lg: '28px'
  };
  const v = variantMap[variant] || variantMap.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onClick: onClick,
    style: {
      borderRadius: 'var(--radius-card)',
      transition: 'box-shadow 180ms cubic-bezier(0,0,0.2,1)',
      overflow: 'hidden',
      cursor: onClick || hoverable ? 'pointer' : undefined,
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      ...v,
      ...extraStyle
    }
  }, props), header && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px ' + paddingMap[padding],
      borderBottom: variant === 'dark' ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--border-subtle)',
      fontWeight: '600',
      fontSize: '0.9375rem',
      color: variant === 'dark' ? '#ffffff' : 'var(--text-primary)'
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: paddingMap[padding],
      flex: 1
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px ' + paddingMap[padding],
      borderTop: variant === 'dark' ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--border-subtle)',
      fontSize: '0.8125rem',
      color: variant === 'dark' ? 'rgba(255,255,255,0.5)' : 'var(--text-secondary)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function Alert({
  variant = 'info',
  title,
  children,
  onDismiss
}) {
  const variantMap = {
    info: {
      bg: 'var(--color-info-light)',
      border: 'var(--color-info)',
      iconColor: 'var(--color-info)',
      titleColor: 'var(--color-info-dark)',
      textColor: 'var(--color-info-dark)'
    },
    success: {
      bg: 'var(--color-success-light)',
      border: 'var(--color-success)',
      iconColor: 'var(--color-success)',
      titleColor: 'var(--color-success-dark)',
      textColor: 'var(--color-success-dark)'
    },
    warning: {
      bg: 'var(--color-warning-light)',
      border: 'var(--color-warning)',
      iconColor: 'var(--color-warning)',
      titleColor: 'var(--color-warning-dark)',
      textColor: 'var(--color-warning-dark)'
    },
    error: {
      bg: 'var(--color-error-light)',
      border: 'var(--color-error)',
      iconColor: 'var(--color-error)',
      titleColor: 'var(--color-error-dark)',
      textColor: 'var(--color-error-dark)'
    }
  };
  const icons = {
    info: /*#__PURE__*/React.createElement("path", {
      d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
    }),
    success: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "22 4 12 14.01 9 11.01"
    })),
    warning: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "9",
      x2: "12",
      y2: "13"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "17",
      x2: "12.01",
      y2: "17"
    })),
    error: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15",
      y1: "9",
      x2: "9",
      y2: "15"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9",
      y1: "9",
      x2: "15",
      y2: "15"
    }))
  };
  const v = variantMap[variant] || variantMap.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      background: v.bg,
      border: `1px solid ${v.border}`,
      borderRadius: 'var(--radius-card)',
      padding: '14px 16px',
      fontFamily: 'var(--font-body)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: v.iconColor,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0,
      marginTop: '1px'
    }
  }, icons[variant]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '3px'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: v.titleColor,
      lineHeight: '1.4'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.875rem',
      color: v.textColor,
      lineHeight: '1.5',
      opacity: 0.85
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: v.iconColor,
      padding: '2px',
      opacity: 0.6,
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function Badge({
  variant = 'default',
  size = 'md',
  dot = false,
  children
}) {
  const variantMap = {
    default: {
      bg: 'var(--color-slate-100)',
      color: 'var(--color-slate-700)',
      border: 'var(--color-slate-200)'
    },
    success: {
      bg: 'var(--color-success-light)',
      color: 'var(--color-success-dark)',
      border: 'var(--color-success-light)'
    },
    warning: {
      bg: 'var(--color-warning-light)',
      color: 'var(--color-warning-dark)',
      border: 'var(--color-warning-light)'
    },
    error: {
      bg: 'var(--color-error-light)',
      color: 'var(--color-error-dark)',
      border: 'var(--color-error-light)'
    },
    info: {
      bg: 'var(--color-info-light)',
      color: 'var(--color-info-dark)',
      border: 'var(--color-info-light)'
    },
    mint: {
      bg: 'var(--color-mint-100)',
      color: 'var(--color-mint-800)',
      border: 'var(--color-mint-200)'
    },
    gold: {
      bg: 'var(--color-gold-100)',
      color: 'var(--color-gold-700)',
      border: 'var(--color-gold-200)'
    },
    navy: {
      bg: 'var(--color-navy-700)',
      color: '#ffffff',
      border: 'var(--color-navy-700)'
    },
    'navy-soft': {
      bg: 'var(--color-navy-100)',
      color: 'var(--color-navy-700)',
      border: 'var(--color-navy-200)'
    }
  };
  const sizeMap = {
    sm: {
      fontSize: '0.6875rem',
      padding: '2px 6px',
      gap: '4px',
      dotSize: '5px'
    },
    md: {
      fontSize: '0.75rem',
      padding: '3px 9px',
      gap: '5px',
      dotSize: '6px'
    }
  };
  const v = variantMap[variant] || variantMap.default;
  const s = sizeMap[size] || sizeMap.md;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      background: v.bg,
      color: v.color,
      border: `1px solid ${v.border}`,
      borderRadius: 'var(--radius-badge)',
      fontSize: s.fontSize,
      fontWeight: '600',
      padding: s.padding,
      fontFamily: 'var(--font-body)',
      letterSpacing: '0.01em',
      whiteSpace: 'nowrap',
      lineHeight: '1.2'
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: s.dotSize,
      height: s.dotSize,
      borderRadius: '50%',
      background: 'currentColor',
      flexShrink: 0,
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  indeterminate = false,
  id,
  hint,
  ...props
}) {
  const ref = React.useRef(null);
  const checkId = id || 'cb-' + Math.random().toString(36).substr(2, 8);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: checkId,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      color: 'var(--text-primary)',
      userSelect: 'none',
      lineHeight: '1.4'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    type: "checkbox",
    id: checkId,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      width: '16px',
      height: '16px',
      flexShrink: 0,
      accentColor: 'var(--color-navy-700)',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, props)), label), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-tertiary)',
      marginLeft: '24px'
    }
  }, hint));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  leadingIcon,
  trailingIcon,
  disabled = false,
  id,
  ...props
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || 'input-' + Math.random().toString(36).substr(2, 8);
  const borderColor = error ? 'var(--color-error)' : focused ? 'var(--color-navy-500)' : 'var(--border-default)';
  const shadow = focused ? error ? 'var(--shadow-focus-amber)' : 'var(--shadow-focus-brand)' : 'var(--shadow-xs)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: 'var(--text-primary)',
      userSelect: 'none'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '11px',
      color: 'var(--text-tertiary)',
      display: 'flex',
      pointerEvents: 'none'
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      background: disabled ? 'var(--surface-subtle)' : 'var(--surface-base)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-input)',
      padding: `10px 12px`,
      paddingLeft: leadingIcon ? '36px' : '12px',
      paddingRight: trailingIcon ? '36px' : '12px',
      outline: 'none',
      boxShadow: shadow,
      transition: 'border-color 180ms cubic-bezier(0,0,0.2,1), box-shadow 180ms cubic-bezier(0,0,0.2,1)',
      cursor: disabled ? 'not-allowed' : 'text'
    }
  }, props)), trailingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '11px',
      color: error ? 'var(--color-error)' : 'var(--text-tertiary)',
      display: 'flex',
      pointerEvents: 'none'
    }
  }, trailingIcon)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: error ? 'var(--color-error)' : 'var(--text-tertiary)',
      lineHeight: '1.4'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked,
  onChange,
  disabled = false,
  id,
  hint,
  name,
  value,
  ...props
}) {
  const radioId = id || 'radio-' + Math.random().toString(36).substr(2, 8);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: radioId,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      color: 'var(--text-primary)',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    id: radioId,
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      width: '16px',
      height: '16px',
      flexShrink: 0,
      accentColor: 'var(--color-navy-700)',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, props)), label), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-tertiary)',
      marginLeft: '24px'
    }
  }, hint));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  disabled = false,
  options = [],
  placeholder,
  id,
  ...props
}) {
  const [focused, setFocused] = React.useState(false);
  const selectId = id || 'select-' + Math.random().toString(36).substr(2, 8);
  const borderColor = error ? 'var(--color-error)' : focused ? 'var(--color-navy-500)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      background: disabled ? 'var(--surface-subtle)' : 'var(--surface-base)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-input)',
      padding: '10px 36px 10px 12px',
      outline: 'none',
      boxShadow: focused ? 'var(--shadow-focus-brand)' : 'var(--shadow-xs)',
      appearance: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color 180ms cubic-bezier(0,0,0.2,1)'
    }
  }, props), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(opt => {
    const value = typeof opt === 'string' ? opt : opt.value;
    const label = typeof opt === 'string' ? opt : opt.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: error ? 'var(--color-error)' : 'var(--text-tertiary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  label,
  labelPosition = 'right',
  disabled = false,
  size = 'md',
  id,
  hint
}) {
  const switchId = id || 'switch-' + Math.random().toString(36).substr(2, 8);
  const sizes = {
    sm: {
      trackW: 32,
      trackH: 18,
      thumbSize: 14,
      offset: 14
    },
    md: {
      trackW: 42,
      trackH: 24,
      thumbSize: 18,
      offset: 18
    }
  };
  const s = sizes[size] || sizes.md;
  const trackStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    width: s.trackW + 'px',
    height: s.trackH + 'px',
    borderRadius: '9999px',
    background: checked ? 'var(--color-navy-700)' : 'var(--color-slate-300)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    padding: '3px',
    transition: 'background 180ms cubic-bezier(0,0,0.2,1)',
    flexShrink: 0,
    position: 'relative',
    boxSizing: 'border-box'
  };
  const thumbStyle = {
    width: s.thumbSize + 'px',
    height: s.thumbSize + 'px',
    borderRadius: '50%',
    background: '#ffffff',
    boxShadow: 'var(--shadow-sm)',
    transform: checked ? `translateX(${s.offset}px)` : 'translateX(0)',
    transition: 'transform 180ms cubic-bezier(0,0,0.2,1)',
    flexShrink: 0
  };
  const labelEl = label && /*#__PURE__*/React.createElement("label", {
    htmlFor: switchId,
    style: {
      fontSize: '0.875rem',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      userSelect: 'none',
      lineHeight: '1.4'
    }
  }, label);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, labelPosition === 'left' && labelEl, /*#__PURE__*/React.createElement("div", {
    style: trackStyle,
    onClick: disabled ? undefined : () => onChange && onChange(!checked)
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: switchId,
    checked: checked,
    onChange: e => onChange && onChange(e.target.checked),
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: thumbStyle
  })), labelPosition === 'right' && labelEl), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-tertiary)',
      paddingLeft: labelPosition === 'left' ? '0' : s.trackW + 10 + 'px'
    }
  }, hint));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  activeTab,
  onChange,
  size = 'md',
  variant = 'underline'
}) {
  const [localActive, setLocalActive] = React.useState(activeTab ?? (tabs[0] && tabs[0].id));
  const active = activeTab !== undefined ? activeTab : localActive;
  const handleChange = id => {
    setLocalActive(id);
    if (onChange) onChange(id);
  };
  const sizeMap = {
    sm: {
      fontSize: '0.8125rem',
      padding: '8px 14px',
      gap: '2px'
    },
    md: {
      fontSize: '0.875rem',
      padding: '10px 16px',
      gap: '2px'
    },
    lg: {
      fontSize: '1rem',
      padding: '12px 20px',
      gap: '4px'
    }
  };
  const s = sizeMap[size] || sizeMap.md;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderBottom: variant === 'underline' ? '1px solid var(--border-default)' : 'none',
      background: variant === 'pill' ? 'var(--surface-subtle)' : 'transparent',
      borderRadius: variant === 'pill' ? 'var(--radius-lg)' : '0',
      padding: variant === 'pill' ? '4px' : '0',
      gap: variant === 'pill' ? '2px' : '0',
      overflowX: 'auto'
    }
  }, tabs.map(tab => {
    const isActive = tab.id === active;
    const tabStyle = variant === 'underline' ? {
      padding: s.padding,
      fontSize: s.fontSize,
      fontWeight: isActive ? '600' : '500',
      color: isActive ? 'var(--color-navy-900)' : 'var(--text-secondary)',
      borderBottom: isActive ? '2px solid var(--color-navy-800)' : '2px solid transparent',
      marginBottom: '-1px',
      cursor: tab.disabled ? 'not-allowed' : 'pointer',
      opacity: tab.disabled ? 0.4 : 1,
      background: 'none',
      border: 'none',
      borderBottomWidth: '2px',
      borderBottomStyle: 'solid',
      borderBottomColor: isActive ? 'var(--color-navy-800)' : 'transparent',
      outline: 'none',
      transition: 'color 150ms, border-color 150ms',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      whiteSpace: 'nowrap',
      flexShrink: 0
    } : {
      padding: s.padding,
      fontSize: s.fontSize,
      fontWeight: isActive ? '600' : '500',
      color: isActive ? 'var(--color-navy-900)' : 'var(--text-secondary)',
      background: isActive ? 'var(--surface-base)' : 'transparent',
      borderRadius: 'var(--radius-md)',
      boxShadow: isActive ? 'var(--shadow-xs)' : 'none',
      cursor: tab.disabled ? 'not-allowed' : 'pointer',
      opacity: tab.disabled ? 0.4 : 1,
      border: isActive ? '1px solid var(--border-subtle)' : '1px solid transparent',
      outline: 'none',
      transition: 'background 150ms, color 150ms',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      whiteSpace: 'nowrap',
      flexShrink: 0
    };
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      style: tabStyle,
      disabled: tab.disabled,
      onClick: () => !tab.disabled && handleChange(tab.id)
    }, tab.icon, tab.label, tab.count !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        background: isActive ? 'var(--color-navy-100)' : 'var(--color-slate-100)',
        color: isActive ? 'var(--color-navy-700)' : 'var(--text-tertiary)',
        borderRadius: '9999px',
        fontSize: '0.6875rem',
        fontWeight: '700',
        padding: '1px 6px',
        lineHeight: '1.4'
      }
    }, tab.count));
  })));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
