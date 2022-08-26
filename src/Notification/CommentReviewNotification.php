<?php

namespace App\Notification;

class CommentReviewNotification
{

    /**
     * @param \App\Entity\Comment $comment
     */
    public function __construct(\App\Entity\Comment $comment)
    {
    }
}