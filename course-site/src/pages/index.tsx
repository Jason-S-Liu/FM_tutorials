import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const modules = [
  ['连续介质与运动学', '连续性假设、流体物性、Euler/Lagrange 描述、连续性方程'],
  ['控制方程与能量观点', 'Navier-Stokes 方程、Bernoulli 方程、能量线与水力坡降线'],
  ['工程内流', '雷诺数、层流、转捩、湍流、管道阻力与管网计算'],
  ['外流与土木结构', '平板边界层、涡量、圆柱/方柱绕流、分离、尾流与回流区'],
];

const facts = [
  ['开课单位', '重庆大学土木工程学院'],
  ['教室', 'B 二 408'],
  ['人数', '19 人'],
  ['学期', '2026 年秋'],
];

function HomepageHeader(): ReactNode {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.kicker}>重庆大学土木工程学院</p>
        <Heading as="h1" className={styles.title}>
          流体力学（1）
        </Heading>
        <p className={styles.subtitle}>
          从连续介质假设、控制方程和能量观点出发，连接管道流、边界层与土木结构外流问题。
        </p>
        <div className={styles.actions}>
          <Link className="button button--primary button--lg" to="/docs/schedule">
            查看教学计划
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/lectures">
            课程讲义
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="流体力学（1）"
      description="重庆大学土木工程学院流体力学（1）课程网站">
      <HomepageHeader />
      <main className={styles.main}>
        <section className={styles.infoGrid}>
          {facts.map(([label, value]) => (
            <div className={styles.fact} key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <Heading as="h2">课程主线</Heading>
            <p>基本概念与控制方程 - 能量方程与量纲分析 - 管道流 - 边界层与钝体绕流 - 土木工程应用</p>
          </div>
          <div className={styles.moduleGrid}>
            {modules.map(([title, text]) => (
              <article className={styles.module} key={title}>
                <Heading as="h3">{title}</Heading>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.band}>
          <div>
            <Heading as="h2">最近课程</Heading>
            <p>
              第 1 次课用于认识同学、课程组织和学习方式说明，不设置课程知识内容。
              第 2 次课进入连续性假设：流体质点、连续介质、密度场、速度场与不可压缩条件。
            </p>
          </div>
          <Link className="button button--outline button--primary" to="/docs/lectures">
            打开第一讲
          </Link>
        </section>
      </main>
    </Layout>
  );
}
