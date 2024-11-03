'use client';
import Link from 'next/link';
import x from '@/styles/app.module.css';
import y from '@/styles/hoidanit.module.css';
import AppTable from '@/components/app.table';
import { useEffect } from 'react';
import useSWR from 'swr';

export default function Home() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        'http://localhost:8000/blogs',
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    if (!data) {
         return <div>loading....</div>
    }
    return (
        <div>
            <div>{data?.length}</div>
            <ul>
                <li className={x['red']}>
                    <Link href={'/facebook'}>
                        <span className={y['red']}>Facebook</span>
                    </Link>
                </li>
                <li style={{ margin: '20px 0' }}>
                    <Link href={'/youtube'}>
                        <span>Youtube</span>
                    </Link>
                </li>
                <li style={{ margin: '20px 0' }}>
                    <Link href={'/tiktok'}>
                        <span>Tiktok</span>
                    </Link>
                </li>
            </ul>
            <AppTable blogs={data} />

            {/* <div className={styles.description}>
                <p>Hello world with Nextjs 13 & Hỏi Dân IT</p>
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer">
                        By
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </div>

            <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>

            <div className={styles.grid}>
                <a
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer">
                    <h2>
                        Docs <span>-&gt;</span>
                    </h2>
                    <p>
                        Find in-depth information about Next.js features and
                        API.
                    </p>
                </a>

                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer">
                    <h2>
                        Learn <span>-&gt;</span>
                    </h2>
                    <p>
                        Learn about Next.js in an interactive course
                        with&nbsp;quizzes!
                    </p>
                </a>

                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer">
                    <h2>
                        Templates <span>-&gt;</span>
                    </h2>
                    <p>Explore the Next.js 13 playground.</p>
                </a>

                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer">
                    <h2>
                        Deploy <span>-&gt;</span>
                    </h2>
                    <p>
                        Instantly deploy your Next.js site to a shareable URL
                        with Vercel.
                    </p>
                </a>
            </div> */}
        </div>
    );
}
