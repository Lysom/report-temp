let styles = {
  topCss: {

  },
  a4: {
    position: 'relative',
    boxSizing: 'border-box',
    width: '210mm',
    height: '297mm',
    padding: '25mm 20mm',
    background: '#f5f5f5'
  },
  a4Content: {
    height: '247mm',
    overflow: 'hidden'
  },
  // 标题、logo
  titleWrap: {
    display: 'inline-block',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '5mm'
  },
  logoImg: {
    position: 'absolute',
    top: 0,
    left: '-26mm',
    width: '63pt',
    height: '63pt'
  },
  title: {
    padding: 0,
    margin: 0,
    height: '21pt',
    lineHeight: '21pt',
    fontSize: '14pt',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  // 基本信息上面的部分
  baseTop: {
    lineHeight: '2em',
    overflow: 'hidden',
    borderBottom: '2px solid #000'
  },
  // 基本信息部分
  baseInfo: {
  },
  headAndFoot: {
    position: 'absolute',
    width: '170mm',
    lineHeight: '2em',
    overflow: 'hidden',
    color: '#999',
    fontSize: '10pt'
  },
  headPart: {
    // A4 高度减下边距
    bottom: '272mm',
    borderBottom: '1px solid #999'
  },
  footPart: {
    // A4 高度减上边距
    top: '272mm',
    borderTop: '1px solid #999'
  },
  footTable: {
    lineHeight: '1.3em'
  },
  footPage: {
    textAlign: 'right'
  }
}

export default styles
