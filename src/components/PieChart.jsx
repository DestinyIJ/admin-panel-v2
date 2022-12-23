import { ResponsivePie } from "@nivo/pie";
import { ThemeTokens } from '../Theme'
import { useTheme } from '@mui/material'

const PieChart = ({data}) => {
    const theme = useTheme()
    const colors = ThemeTokens(theme.palette.mode)

    return (
        <ResponsivePie
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                        stroke: colors.gray[100],
                        strokeWidth: 1
                        }
                    },
                    legend: {
                        text: {
                        fontSize: 18,
                        fill: colors.gray[100]
                        }
                    },
                    ticks: {
                        line: {
                        stroke: colors.gray[100],
                        strokeWidth: 3
                        }, 
                        text: {
                        fontSize: 14,
                        fill: colors.gray[100]
                        }
                    }
                },
                legends: {
                    title: {
                        text: {
                        fontSize: 14,
                        fill: colors.gray[100]
                        }
                    },
                    text: {
                        fontSize: 14,
                        fill: colors.gray[100]
                    }
                },
                tooltip: {
                    container: {
                        color: colors.gray[900],
                        backgroundColor: colors.primary[200]
                    }
                },
                annotations: {
                    text: {
                        fill: 'red'
                    }
                }
            }}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.2
                    ]
                ]
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={colors.gray[100]}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        3
                    ]
                ]
            }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

export default PieChart
