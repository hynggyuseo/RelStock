package com.ssmm.stockcrawler.lockingTests;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.StampedLock;


public class OptimisticLockTests {
	public static void main(String[] args) {
		ExecutorService executor = Executors.newFixedThreadPool(2);
		StampedLock lock = new StampedLock();

		executor.submit(() -> {
		    long stamp = lock.tryOptimisticRead();
		    try {
		    	System.out.println(Thread.currentThread().getName()+"="+stamp);
		        System.out.println(Thread.currentThread().getName()+"="+"Optimistic Lock Valid: " + lock.validate(stamp));
		        sleep(1);
		        System.out.println(Thread.currentThread().getName()+"="+"Optimistic Lock Valid: " + lock.validate(stamp));
		        sleep(2);
		        System.out.println(Thread.currentThread().getName()+"="+"Optimistic Lock Valid: " + lock.validate(stamp));
		    } finally {
		        lock.unlock(stamp);
		    }
		});

		executor.submit(() -> {
		    long stamp = lock.writeLock();
		    System.out.println(Thread.currentThread().getName()+"="+stamp);
		    try {
		        System.out.println(Thread.currentThread().getName()+"="+"Write Lock acquired");
		        sleep(2);
		    } finally {
		        lock.unlock(stamp);
		        System.out.println(Thread.currentThread().getName()+"="+"Write done");
		    }
		});
		
		stop(executor);
	}

	public static void stop(ExecutorService executor) {
		try {
			executor.shutdown();
			executor.awaitTermination(60, TimeUnit.SECONDS);
		} catch (InterruptedException e) {
			System.err.println("termination interrupted");
		} finally {
			if (!executor.isTerminated()) {
				System.err.println("killing non-finished tasks");
			}
			executor.shutdownNow();
		}
	}

	public static void sleep(int seconds) {
		try {
			TimeUnit.SECONDS.sleep(seconds);

		} catch (InterruptedException e) {
			throw new IllegalStateException(e);
		}
	}
}
