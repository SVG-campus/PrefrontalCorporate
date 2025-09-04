'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, query, where, onSnapshot, orderBy, serverTimestamp } from 'firebase/firestore';

interface Comment {
  id: string;
  name: string;
  message: string;
  timestamp: Date;
}

interface CommentsProps {
  topicId: string; // The slug of the research project
}

export default function Comments({ topicId }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Listen for real-time updates to comments
  useEffect(() => {
    if (!topicId) return;

    const q = query(
      collection(db, 'comments'),
      where('topicId', '==', topicId),
      orderBy('timestamp', 'desc')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const commentsData: Comment[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        commentsData.push({
          id: doc.id,
          name: data.name || 'Anonymous',
          message: data.message,
          timestamp: data.timestamp?.toDate(),
        });
      });
      setComments(commentsData);
    });

    return () => unsubscribe();
  }, [topicId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;
    setStatus('loading');

    try {
      await addDoc(collection(db, 'comments'), {
        topicId,
        name: name.trim() || 'Anonymous',
        message: message.trim(),
        timestamp: serverTimestamp(),
      });
      setStatus('success');
      setMessage('');
      setName('');
    } catch (error) {
      console.error('Error adding comment:', error);
      setStatus('error');
    } finally {
        setTimeout(() => setStatus('idle'), 2000);
    }
  };

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-6">Comments</h2>

      {/* Comment Form */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Leave a Comment</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="comment-name" className="block text-sm font-medium text-gray-700">Name (Optional)</label>
            <input type="text" id="comment-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
          </div>
          <div>
            <label htmlFor="comment-message" className="block text-sm font-medium text-gray-700">Comment</label>
            <textarea id="comment-message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={4} placeholder="Share your thoughts..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"></textarea>
          </div>
          <button type="submit" disabled={status === 'loading'} className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400">
            {status === 'loading' ? 'Posting...' : 'Post Comment'}
          </button>
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <p className="font-bold text-gray-800">{comment.name}</p>
                <p className="text-xs text-gray-500 ml-auto">
                  {comment.timestamp ? new Date(comment.timestamp).toLocaleString() : 'Just now'}
                </p>
              </div>
              <p className="text-gray-700">{comment.message}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet. Be the first to share your thoughts!</p>
        )}
      </div>
    </div>
  );
}
